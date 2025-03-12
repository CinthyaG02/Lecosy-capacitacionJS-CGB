# Lecosy-capacitaciosssnJS-CGB
COMANDOS GIT
  - *git --version* -> Es para que se muestre la version de Git instalada en el sistema, si es que la tiene.
  - *git clone repositorio* -> Clona un repositorio con todo su historial de cambios.
          - **FORK** -> Crea una copia del repositorio en tu cuenta, cambiando de dueño.
          - **CLONE** -> Descarga el repositorio localmente, pero sigue vinculado con el dueño original 
  - *git clone repositorio --depth =1* -> Clona solamente la última versión del código sin el historial completo.
  - *git commit --mesage "Change styles of README"* -> Guarda los cambios en el historial de Git con un mensaje explicativo
  - *git push - u origin main* -> Envía los cambios a una rama main en GitHub y la vincula como rama predeterminada para futuros push
  - *git switch -c nombreDeRama* -> Crea una nueva rama y cambia a ella **(el "-c" es para crear la rama directamente, sin el "-c" solamente hace cambio de la rama)**
  - *git push -u origin nombreDeRama* -> Sube la rama nueba a GitHub y la vincula para futuros push
  - *gite remote --verbose* -> Muestra las direcciones de los repositorios remotos vinculados al proyecto
  - *git pull upstream main* -> Trae las actualizaciones de la rama main del repositorio original a tu repositorio local
  - *Draft pull request* -> Es un pull request en borrador, útil para revisiones antes de hacer una solicitud final de cambios.
  - *git remote add nombre deDonde* -> Agrega un repositorio remoto con un alias para luego poder hacer pull de sus actualizaciones
  

    Note: Al momento de estar haciendo cambios para mandar pull request, solo tocar lo mínimo indispensable.
    
