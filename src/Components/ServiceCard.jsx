
const ServiceCard = ({imgURL ,label ,subtext}) => {
  return (
    <div>
      
      <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-ful rounded-[20px] shadow-3xl px-10 py-16">
       <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
       <img src={imgURL} alt={label} width={25} height={25}/> 
       </div>
      <h3 className="mt-5 text-3xl font-palanquin leading-normal font-bold">{label}</h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">{subtext}</p>
      </div>
    </div>
  )
}

export default ServiceCard
