

function PhotoComponent({url, credit, click})
{


    return (
<span className="will-change-transform w-[100%] p-[3%_0_1.3%_0] flex flex-col items-center bg-white  justify-center gap-[1rem] transition duration-300 ease-in-out hover:scale-[1.1] hover:-translate-y-1 ">

        <img className="w-[90%] h-fit blur-100 hover:blur-0 object-cover" src={url} alt={credit} />
        <h2 className="text-neutral-800 font-semibold">{credit}</h2>
        </span>
    )
}

export default PhotoComponent;