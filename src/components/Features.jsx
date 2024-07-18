import { useState } from "react"
import FeatureBox from "./FeatureBox"
const Features = () => {
const [items, setItems]=useState([

  {icon:"icon-access-anywhere.svg",
    title:"Acces your files,anywhere",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus inventore, at possimus illum dignissimos iste quae assumenda sunt ab perferendis sit accusantium placeat? "
  },
   {icon:"icon-collaboration.svg",
    title:"Acces your anywhere",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus inventore, at possimus illum dignissimos iste quae assumenda sunt ab perferendis sit accusantium placeat? "
  } 
  ,{icon:"icon-any-file.svg",
    title:"Acces your files,anywhe",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus inventore, at possimus illum dignissimos iste quae assumenda sunt ab perferendis sit accusantium placeat? "
  }, 
 
  {icon:"icon-arrow.svg",
    title:"Acces your files,anywhe",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus inventore, at possimus illum dignissimos iste quae assumenda sunt ab perferendis sit accusantium placeat? "
  }
])

  return (
   <section>
    <div className="container">

      <div className=" grid grid-cols-1 
                       md:grid-cols-2 gap-[100px] 
                       w-[865px]
                       mx-auto max-w-full
                       ">


        {items.map((item)=>(
<FeatureBox  key={item.title}
title={item.title}
icon={item.icon}
desc={item.desc}
/>
))}
      </div>


    </div>
   </section>
  )
}

export default Features