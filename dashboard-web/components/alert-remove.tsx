import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";

export default function AlertRemove() {
  function handleRemove() {
    console.log("Usuário removido");
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant={"outline"}
          className="gap-2 flex items-center justify-center outline-none"
        >
          Remover <Trash color="#ff0000" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Tem certeza que deseja remover ?</AlertDialogTitle>
          <AlertDialogDescription>
            Essa ação não pode ser desfeita e o usuário será excluído
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-[#ff0000] text-white font-medium hover:bg-[#ff4444] hover:text-white">
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleRemove}>
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
