function nombreResolucion(ancho, alto){
    if (ancho >= 7680 && alto >= 4320){
        return '8k';
    }else{
        if (ancho >= 3840 && alto >= 2160){
            return '4k';
        }else {
            if (ancho >= 1920 && alto >= 1080){
                return 'WQHD';
            }else{
                if (ancho >= 2560 && alto >= 1440){
                    return 'fHD';
                }else{
                    if (ancho >= 1280 && alto >= 720){
                        return 'HD';
                    }else{
                        return 'ay no se';
                    }
                }
            }
        }
    }
}

let nombre = nombreResolucion(1366, 768);
console-log(nombre);