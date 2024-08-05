import Card from "./card"

// interface featureProps {
//     title: string
// }

// const Feature = ({
//     title
// }: featureProps) => {
//     return (
//         <div className=" rounded-xl my-4">
//             <div className="rounded-t-xl flex justify-center text-white  bg-black px-2">
//                 <h1 className="text-2xl font-bold py-2" >{title}</h1>
//             </div>
//            <p className="rounded-b-xl bg-[#fc9b0c] p-2">
//            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
//            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
//            </p>
//         </div>
//     )
// }

export const Features = () => {
  return (
    <div className=" w-[80%] lg:w-[60%] mx-auto  grid md:grid-cols-3 gap-5 py-[8vh]" >
         <Card title="Card Title" paragraph="This is the paragraph content of the card. and some random text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " />
         <Card title="Card Title" paragraph="This is the paragraph content of the card. and some random text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " />
         <Card title="Card Title" paragraph="This is the paragraph content of the card. and some random text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " />
    </div>
  )
}
