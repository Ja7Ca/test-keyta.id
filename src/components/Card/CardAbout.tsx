import checklist from "../../assets/checklist.svg"

const CardAbout = (props:{title: string, subtitle: string}) => {
  return (
    <div className="p-5 rounded-lg shadow flex gap-4 w-full md:max-w-xl items-start">
                        <img src={checklist}/>
                        <div>
                            <p className="font-bold text-lg md:text-xl uppercase">{props.title}</p>
                            <p className="text-gray-500 mt-2 md:mt-4">{props.subtitle}</p>
                        </div>
                    </div>
  )
}

export default CardAbout