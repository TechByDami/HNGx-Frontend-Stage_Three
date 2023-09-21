import { useState } from "react"
import {imageData} from "../utils/imageData"
import Images from "./Images";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove, arraySwap, rectSwappingStrategy} from "@dnd-kit/sortable";

export default function Gallery() {
  const [item, setItem] = useState(imageData)

  
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
    <section className="w-full font-poppins md:pt-2 pt-0 pb-16 ">
      
      <div className="text-white flex flex-col gap-y-1 md:my-10 my-5">
        <h3 className="text-center font-semibold md:text-3xl">Nigeria Top trending Artist 2023</h3>
        <p className="text-justify text-sm">In recent years, Nigerian music has travelled far and wide. We have collectively witnessed the immense rise of Afrobeats as it pervades foreign markets across the world. 2022 saw artists like Burna Boy and Rema dominate global charts including the Billboard Top 100 and Official UK Top 40. <br /> On the local scene, a slew of artists which includes the likes of Asake, Young Jonn and Seyi Vibez attained mainstream recognition, etching their footprints in the sands of time and blocks of history. As we enter 2023 gracefully, we’re shot out of the cannon by the influx of new sounds and artists that will emerge from Nigeria.<br />If you don’t want to miss out on the names who are likely to be in the spotlight soon, check out our list of Nigeria’s emerging artists of 2023.</p>
      </div>

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
      
    </section>
  )
}


