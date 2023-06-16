import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface CategoryListProps {
  items: string[]
}

export function CategoryList({ items }: CategoryListProps) {
  return (
    <>
      {items.map((category, index) => (
        <Accordion collapsible type="single" key={index}>
          <AccordionItem value={category}>
            <AccordionTrigger>{category}</AccordionTrigger>
            <AccordionContent>
              <div className="container">Something here</div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </>
  )
}
