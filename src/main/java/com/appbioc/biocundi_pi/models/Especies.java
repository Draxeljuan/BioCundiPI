package com.appbioc.biocundi_pi.models;

import java.util.List;

public class Especies {

    private String id;
    private String scientificNameSimple;  // "scientificNameSimple" del JSON
    private List<CommonName> commonNames;  // Lista de "commonNames"
    private String threatStatusValue;  // "threatStatusValue"
    private ImageInfo imageInfo;  // Objeto anidado "imageInfo"

    // Getters y Setters


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

