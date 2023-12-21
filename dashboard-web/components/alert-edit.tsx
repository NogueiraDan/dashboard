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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Pencil } from "lucide-react";

interface Field {
  name: string | any;
  type: string;
}

interface SelectOption {
  value: string | any;
}

interface Props {
  fields: Field[];
  select?: SelectOption[];
}

export default function AlertEdit({ fields, select }: Props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant={"outline"}
          className="gap-2 flex items-center justify-center outline-none"
        >
          Editar
          <Pencil color="#0055ff" />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl">
            Editando o usuário
          </AlertDialogTitle>
          <AlertDialogDescription>
            Preencha com as novas informações
          </AlertDialogDescription>
        </AlertDialogHeader>
        <form>
          <div className="grid w-full items-center gap-4">
            {fields.map((field) => (
              <>
                <div className="flex flex-col space-y-1.5">
                  <Label>{field.name}</Label>
                  <Input type={field.type} />
                </div>
              </>
            ))}
            {select && (
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="profile">Perfil</Label>
                <Select>
                  <SelectTrigger id="profile">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    {select.map((select) => (
                      <SelectItem key={select.value} value={select.value}>
                        {select.value}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
        </form>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-[#ff0000] text-white font-medium hover:bg-[#ff4444] hover:text-white">
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => alert("Editou")}
            className="bg-[#0055ff] hover:bg-[#2970ff]"
          >
            Atualizar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
