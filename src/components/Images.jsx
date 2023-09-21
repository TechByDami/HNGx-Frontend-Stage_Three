import { useSortable } from '@dnd-kit/sortable';
import { CSS } from "@dnd-kit/utilities";

export default function Images({ id, source, info, tag }) {
    const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  return (
      <div
           ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className={`z-[10] transition-all ease-in duration-200 md:w-[200px] lg:w-[300px] xl:w-[350px] w-[130px] md:h-[200px] lg:h-[300px] xl:h-[350px] h-[130px] rounded-lg border-2 border-white/30 relative cursor-grab touch-none`}>
            <img
              src={source}
              alt={info}
              className="w-full h-full object-cover rounded-lg hover:scale-110" />
            <p className="absolute bottom-2 right-1 text-[#4c19bc] bg-white/50 font-bold text-lg px-2 rounded-md object-center">{tag}</p>
          </div>
  )
}
