import { useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai"
import Images from "./Images";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove, arraySwap, rectSwappingStrategy} from "@dnd-kit/sortable";


export default function Search({ filteredImages, setLoading, searchKey }) {
    const [item, setItem] = useState(filteredImages)
   

    function handleDragEnd(event) {
    console.log("Drag end called");
    const { active, over } = event;
    console.log("ACTIVE: " + active.id);
    console.log("OVER :" + over.id);

    if (active.id !== over.id) {
      setItem((users) => {
      const oldIndex = users.findIndex((user) => user.id === active.id);
      const newIndex = users.findIndex((user) => user.id === over.id);
      return arrayMove(users, oldIndex, newIndex);
    });
      
    }
  }
  return (
      <div className="absolute sm:top-[150px] top-[80px] left-0 w-full bg-black rounded-xl py-10 z-[99]">
          <AiOutlineCloseSquare className="absolute top-5 right-8 text-xl w-fit" onClick={setLoading} />
          <h2 className="sm:text-2xl text-lg sm:pl-28 pl-16 text-left">Search result for... <span className="bold text-transform: uppercase text-[#ae8ef2]">"{searchKey}"</span></h2>
          

           <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}>
        <SortableContext
          items={item}
          strategy={rectSwappingStrategy}
          reorderItems={arraySwap}
          >
          <div className="flex items-center justify-center flex-wrap sm:gap-10 gap-5">
        {item?.map((img, index) => (
          <Images
            getNewIndex={({ id, items, activeIndex, overIndex }) =>
            arraySwap(items, activeIndex, overIndex).indexOf(id)}
            key={index} id={img.id} source={img.source} info={img.info} tag={img.tag} />
        ))}
      </div>
        </SortableContext>
      </DndContext>
    </div>
  )
}
