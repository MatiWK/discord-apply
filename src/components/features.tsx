interface featureProps {
    title: string
}

const Feature = ({
    title
}: featureProps) => {
    return (
        <div className=" rounded-xl my-4">
            <div className="rounded-t-xl flex justify-center text-white  bg-black px-2">
                <h1 className="text-2xl font-bold py-2" >{title}</h1>
            </div>
           <p className="rounded-b-xl bg-[#fc9b0c] p-2">
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
           </p>
        </div>
    )
}

export const Features = () => {
  return (
    <div className="w-[80%] mx-auto  grid md:grid-cols-3 gap-5">
        <Feature title='Feature 1'/>
        <Feature title='Feature 2'/>
        <Feature title='Feature 3'/>
    </div>
  )
}
