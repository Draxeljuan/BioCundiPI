package com.appbioc.biocundi_pi.models;

import org.apache.logging.log4j.spi.ObjectThreadContextMap;

import java.util.List;
import java.util.Map;

public class EspeciesAvz {

    private String scientificNameSimple;  // "scientificNameSimple" del JSON
    private List<CommonName> commonNames;  // Lista de "commonNames"
    private String threatStatusValue;  // "threatStatusValue"
    private ImageInfo imageInfo;  // Objeto anidado "imageInfo"
    private String family;  // "family" del JSON
    private String order;  // "order" del JSON
    private String className;  // "class" del JSON
    private String distribution;  // "distribution" del JSON

    // Adicionales
    private List<String> scientificName;  // scientificName
    private List<String> kingdom;          // reino
    private List<String> phylum;           // filo
    private List<String> genus;            // género
    private List<String> subGenus;         // subgénero
    private List<String> specificEpithet;  // epíteto específico
    private List<String> infraspecificEpithet; // epíteto infraespecífico
    private List<String> department;       // departamento
    private List<String> assessment;       // evaluación de riesgo y extinción
    private List<String> threatUICN;       // categoría de amenaza (UICN)
    private List<String> usos;             // usos
    private List<String> threatMADS;       // categoría de amenaza (MADS)
    private List<String> threatCITES;      // categoría de amenaza (CITES)
    private boolean endemic;                // endémico
    private List<String> habitat;          // hábitat
    private boolean invasiveness;           // invasividad
    private boolean exotic;                 // exótico
    private boolean invasive;               // invasividad

    private Map<String, Object> additionalData;

    // Getters y Setters


    public Map<String, Object> getAdditionalData() {
        return additionalData;
    }

    public void setAdditionalData(Map<String, Object> additionalData) {
        this.additionalData = additionalData;
    }

    public String getScientificNameSimple() {
        return scientificNameSimple;
    }

    public void setScientificNameSimple(String scientificNameSimple) {
        this.scientificNameSimple = scientificNameSimple;
    }

    public List<CommonName> getCommonNames() {
        return commonNames;
    }

    public void setCommonNames(List<CommonName> commonNames) {
        this.commonNames = commonNames;
    }

    public String getThreatStatusValue() {
        return threatStatusValue;
    }

    public void setThreatStatusValue(String threatStatusValue) {
        this.threatStatusValue = threatStatusValue;
    }

    public ImageInfo getImageInfo() {
        return imageInfo;
    }

    public void setImageInfo(ImageInfo imageInfo) {
        this.imageInfo = imageInfo;
    }

    public String getFamily() {
        return family;
    }

    public void setFamily(String family) {
        this.family = family;
    }

    public String getOrder() {
        return order;
    }

    public void setOrder(String order) {
        this.order = order;
    }

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }

    public String getDistribution() {
        return distribution;
    }

    public void setDistribution(String distribution) {
        this.distribution = distribution;
    }

    // Adicionales Getter Y Setters


    public List<String> getScientificName() {
        return scientificName;
    }

    public void setScientificName(List<String> scientificName) {
        this.scientificName = scientificName;
    }

    public List<String> getKingdom() {
        return kingdom;
    }

    public void setKingdom(List<String> kingdom) {
        this.kingdom = kingdom;
    }

    public List<String> getPhylum() {
        return phylum;
    }

    public void setPhylum(List<String> phylum) {
        this.phylum = phylum;
    }

    public List<String> getGenus() {
        return genus;
    }

    public void setGenus(List<String> genus) {
        this.genus = genus;
    }

    public List<String> getSubGenus() {
        return subGenus;
    }

    public void setSubGenus(List<String> subGenus) {
        this.subGenus = subGenus;
    }

    public List<String> getSpecificEpithet() {
        return specificEpithet;
    }

    public void setSpecificEpithet(List<String> specificEpithet) {
        this.specificEpithet = specificEpithet;
    }

    public List<String> getInfraspecificEpithet() {
        return infraspecificEpithet;
    }

    public void setInfraspecificEpithet(List<String> infraspecificEpithet) {
        this.infraspecificEpithet = infraspecificEpithet;
    }

    public List<String> getDepartment() {
        return department;
    }

    public void setDepartment(List<String> department) {
        this.department = department;
    }

    public List<String> getAssessment() {
        return assessment;
    }

    public void setAssessment(List<String> assessment) {
        this.assessment = assessment;
    }

    public List<String> getThreatUICN() {
        return threatUICN;
    }

    public void setThreatUICN(List<String> threatUICN) {
        this.threatUICN = threatUICN;
    }

    public List<String> getUsos() {
        return usos;
    }

    public void setUsos(List<String> usos) {
        this.usos = usos;
    }

    public List<String> getThreatMADS() {
        return threatMADS;
    }

    public void setThreatMADS(List<String> threatMADS) {
        this.threatMADS = threatMADS;
    }

    public List<String> getThreatCITES() {
        return threatCITES;
    }

    public void setThreatCITES(List<String> threatCITES) {
        this.threatCITES = threatCITES;
    }

    public boolean isEndemic() {
        return endemic;
    }

    public void setEndemic(boolean endemic) {
        this.endemic = endemic;
    }

    public List<String> getHabitat() {
        return habitat;
    }

    public void setHabitat(List<String> habitat) {
        this.habitat = habitat;
    }

    public boolean isInvasiveness() {
        return invasiveness;
    }

    public void setInvasiveness(boolean invasiveness) {
        this.invasiveness = invasiveness;
    }

    public boolean isExotic() {
        return exotic;
    }

    public void setExotic(boolean exotic) {
        this.exotic = exotic;
    }

    public boolean isInvasive() {
        return invasive;
    }

    public void setInvasive(boolean invasive) {
        this.invasive = invasive;
    }

    // Clases internas para manejar los objetos anidados
    public static class CommonName {
        private String language;  // "language" dentro de "commonNames"
        private String name;  // "name" dentro de "commonNames"

        // Getters y Setters
        public String getLanguage() {
            return language;
        }

        public void setLanguage(String language) {
            this.language = language;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }
    }

    public static class ImageInfo {
        private String mainImage;  // "mainImage"
        private String thumbnailImage;  // "thumbnailImage"
        private String source;  // "source"
        private String rightsHolder;  // "rightsHolder"
        private String license;  // "license"

        // Getters y Setters
        public String getMainImage() {
            return mainImage;
        }

        public void setMainImage(String mainImage) {
            this.mainImage = mainImage;
        }

        public String getThumbnailImage() {
            return thumbnailImage;
        }

        public void setThumbnailImage(String thumbnailImage) {
            this.thumbnailImage = thumbnailImage;
        }

        public String getSource() {
            return source;
        }

        public void setSource(String source) {
            this.source = source;
        }

        public String getRightsHolder() {
            return rightsHolder;
        }

        public void setRightsHolder(String rightsHolder) {
            this.rightsHolder = rightsHolder;
        }

        public String getLicense() {
            return license;
        }

        public void setLicense(String license) {
            this.license = license;
        }
    }
}

