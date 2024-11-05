package com.appbioc.biocundi_pi.controllers;


import com.appbioc.biocundi_pi.models.EspeciesAvz;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;
import org.springframework.http.HttpStatus;

import java.util.List;

@RestController

public class EspeciesAvzController {

    @Autowired
    private WebClient webClient;

    @Value("${api.biodiversidad.token}")
    private String apiToken;

    // Método de búsqueda avanzada
    @RequestMapping(value = "/buscarEspecieAvz")
    public Mono<List<EspeciesAvz>> buscarEspecie(
            @RequestParam String q,
            @RequestParam(defaultValue = "false") boolean count,
            @RequestParam(defaultValue = "1000") int size) {

        return webClient.get()
                .uri("/record_search/search?q={q}&count={count}&size={size}", q, count, size)
                .header("Authorization", "Bearer " + apiToken)
                .retrieve()
                .onStatus(status -> status.is4xxClientError(), response -> {
                    return Mono.error(new Exception("Error al consultar la API"));
                })
                .onStatus(status -> status.is5xxServerError(), response -> {
                    return Mono.error(new Exception("Error en el servidor de la API"));
                })
                .bodyToMono(new ParameterizedTypeReference<List<EspeciesAvz>>() {}); // Deserialización a List<EspeciesAvz>
    }
}
