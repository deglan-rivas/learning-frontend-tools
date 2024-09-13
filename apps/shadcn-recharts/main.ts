// chatgpt: Flexbox Responsive Layout Tailwind
// aprendidos locales
// Error: Rendered more hooks than during the previous render., sucede porque debe ejecutarse el mismo orden de los hooks en cada renderización, por lo general sucede con useMemo o useEffect, en el caso de mi req, había colocado los useMemo después de los if de loading o error, por eso a veces cambia el orden y react da un error -> sol: había que mover los useMemo antes de los if's que tienen return, obvio realizar las validaciones respectivas pues ?.tokens || [] y también un if .length < 2 dentro del useMemo ez -> TODO el caso del componente LoadingAnimation que viene del isLoading del hook useSWR usa un useEffect y eso no altera el orden de los hooks? Según chatgpt el condicional afecta el renderizado y no la ejecución de los hooks, realmente son distintos? No me queda claro, pero se está dilantando mucho esto xd
// // el arreglo de dependencias del useMemo es justamente para triggerearlo cuando los valores cambien, si definimos la variable tokenData por fuera, entonces nunca cambia sino que se guarda una sola vez al cargar el JS de react y lista, podríamos borrarlo para dejarlo así [], otra opción es guardarlo por dentro de la función Page u Home y usar un useMemo para cachearlo cosa que ahora sí cambiaría ocasionalmente pues si no le ponemos useMemo se va a recrear el valor por cada renderización y entonces estaría porlas el useMemo xD -> sol: sí, aplicar useMemo al useMemo xd o sacar el tokenData y cambiar el array por un [] nomás
// movemos chartData y los config con variation dentro del componente Home pues los hooks deben ir dentro de las funciones o componentes, son reglas de react, pues e programación funcional, sino el doble render de dev nos dará un warning o fácil error xd
// este warning: The 'chartData' array makes the dependencies of useMemo Hook (at line 64) change on every render. To fix this, wrap the initialization of 'chartData' in its own useMemo() Hook. -> se debe a que al (des)montar el componente se pierde el espacio en memoria, por lo que cambia el valor de la variable y nunca se cachería usando el useMemo, o sea, estaría porlas, por eso dejar la constante afuera o usar un useMemo para cachearla como el comment
// problemas de hidratación por le doble render

// aprendidos globales o genéricos
// flex flex-wrap y gap fallan con el w-1/x, pues ese pequeño margin hace que desborde y se cree una nueva fila -> sol: usar calc con [] para personalizarlo como en el ejemplo
// useMemo por lo general lleva dentro un reduce, así cacheamos el valor cosa que, por ejm, si un useEffect lo tiene como dependencia ya no va a reejecutar el mismo código seguido sino cuando en verdad cambie el valor de la dependencia
// buenas prácticas, ciclo de vida, useEffect y clean code
// ciclo de vida de un componente: montaje con useEffect [], desmontaje con return callback del useEffect, actualización cada vez que cambie el state -> los props que se le pasa al compnante o el useState del propio componente, la actualización puede ocurrer muchas veces, mientras que montaje y desmontaje una sola vez por eso actúa bien con el useEffect [], renderización es el pintadao que hace react cada vez que cambia el state, -> mi ejemplo del InnerOuterScope que una una variable outsideVar fuera del scope de la function render lo ejemplifica a la perfección, por cierto, da error o warning pues no es la forma correcta de renderizar: según los react docs, la única forma es usar el state con useState, el doble render del "dev mode" de react hará que haya un warning si usamos react puro o un error de hidratación si usamos nextjs, 
// buenas prácticas, 
// useEffect para efectos secundarios como llamadas a API navegador tipo scroll resize timer del anvegador o DOM o externas
// no olvidar useEffect [] si es solo al montar como un fetch o si renderiza un pequeño componente con cada cambio del this.state.
// useMemo o useCallback por si hay que cachear data para no disparar el useEffect o cambios en el render producidos por props modificadas o el state
// mantener los componentes pequeños y reutilizables, como se vio con zustand en los react dev tool o creo que eran redux dev tools al activar el tick cada vez que rerenderice: si cambia algo pequeño del componente va a renderizar todo el componente grande, por eso es mejor separar o incluso usar composición con el children -> TODO validar si con composición igual solo renderiza el hijo xd
// useEffect no es para manejar la lógica principal, para eso están los state derivados, no es correcto agregar un setX dentro del useEffect, aunque no dé error
// key en las listas debe ser único duh xd
// los hooks deben estar en la misma posición en cada render por eso no usar condicionales o bucles o fn's: useEffect(()=>(isLoading) ... , [isLoading])
// evitar mutar obvio no state.push sino [...state, x]
// interesante utilizar el spread operator para pasar objeto de pros y no una por una así: const buttonProps = { className: 'btn', onClick: handleClick };
// separar la lógica del negocio de la UI usando custom hooks ez
// react dev tools puede servir para seguir los valores del state ez
// useEffect ez xdddd
// clean code naming vars -> el subj u obj primero y ser consistente, ejm: no tokenDate y luego dataInteraction xD
// chartDataToken por tokenData, tokenStats, tokensByMonth
// tokenConfig, tokenChartConfig, tokenStatsConfig, tokenVisualizationConfig
// tokenVariation, tokenGrowth, tokenRate, tokenGrowthRate, tokenChange, 