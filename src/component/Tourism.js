import React, { useContext } from 'react'
import { store } from './Detail'
import Block2 from '../Blocks/Block2'
import Blocktoppost from '../Blocks/Blocktoppost'

const Tourism = () => {
  const [response] = useContext(store)
  // const [detail,setDetail] =useContext(store)
  return (
    <div className='main_container' >
      <div>
       <h1 className='heading_tourism' >Tourism</h1>
   
   {response.filter((e)=> (e.category === "Tourism")).map((c) => {
        return(<Block2
          // ids={c.id}
          img={c.image}
          title={c.title}
          description={c.description}
          date={c.date}
          category={c.category} />)
      })
      }
      </div>

<div>
     <div>

     <h1>Top Post</h1>
        {response.filter((e)=> (e.category === "Tourism")).map((c) => {
        return(<Blocktoppost
        img={c.image}
        title={c.title}
           />)
      })
      }
      </div>
      <div className='advertisement' >Advertisement</div>
     </div>

       


    </div>
  )
}

export default Tourism