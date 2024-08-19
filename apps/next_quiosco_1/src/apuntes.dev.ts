// no es conveniente usar "async function" un "use client", pues el client component tardaría en renderizar, por eso creamos el CategoryItem.ts para ahí aplicar el "use client" y dentro un useParams
// el useParams fue necesario pues como server component solo tenía acceso a la ruta /order y no /order/[category]
// usar un last-of-type directamente en el CategoryItem.tsx para agregar borde superior
// zustand debe usarse en "use client", igual que el toastify y el button, por eso separamos el AddButton en nuevo file, cosa que así podemos renderizar las imágenes optimizadas desde el servidor que es lo más importante
// separar las constantes en un constants.ts aunque noté que se podía compartir directamente en el index.ts del utils, pero bueno xd mejor usarlo como archivo de barrido
// el disabled me gusta, da buen feedback al user
// usar el useRef para limpiar el input text del Summary.tsx, ayudar de chatgpt


// TODO deshabilitar el AddProductButton cuando se llegue al límite de 5
// como cliente puedo deshabilitar el disabled de mi button de OrderSlot y seugir disminuyendo, por eso agregar validación de js, aunque también se puede deshabilitar, pero si la quitamos ya ni podríamos ver ese componente pues react es SPA ez de todas formas es bueno manejar los dev tools como un pro para cargar css js o agregar nodos o styles directamente desde el navegador