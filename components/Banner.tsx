export default function Banner() {
   return (
      <div className="bg-nf1-dark relative h-96 w-full ">
         <img className="absolute inset-0 object-cover w-full h-full hidden md:block" src="https://unsplash.it/800/200" alt="Banner" />
         <img className="absolute inset-0 object-cover w-full h-full block md:hidden" src="https://unsplash.it/400/200" alt="Banner" />
         <div className="relative flex flex-col gap-10 items-center sm:items-start sm:pl-16 justify-center h-full">
            <div className="uppercase flex flex-col text-3xl lg:text-7xl sm:text-4xl font-extrabold font-title text-nf1-branco px-3">
               <span className="text-stroke text-fill-transparent">Bem-vindo ao</span>
               <span>Centro de adoração</span>
               <span>núcleo da fé</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-20 gap-5 md:text-base text-sm">
               <a href="" target="_blank">
                  <button className="bg-nf1-destaque md:px-4 px-2 md:py-2 py-1 text-nf1-branco rounded-full">Horário dos cultos</button>
               </a>
               <a href="https://www.youtube.com/@nucleodafelive/streams" target="_blank">
                  <button className="bg-nf1-destaque md:px-4 px-2 md:py-2 py-1 text-nf1-branco rounded-full">Assista nossos cultos ao vivo</button>
               </a>
            </div>
         </div>
      </div>
   )
}