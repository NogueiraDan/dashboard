import React from "react";
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
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Pencil } from "lucide-react";
import { getUserInfo } from "@/lib/actions";

interface Field {
  label: string;
  name: string | any;
  type: string;
}

interface SelectOption {
  value: string | any;
}

interface Props {
  fields: Field[];
  select?: SelectOption[];
  onSubmit?: (user: any, id: any) => Promise<any>;
  id: any;
}

export default function AlertEdit({ fields, select, id, onSubmit }: Props) {
  const [formData, setFormData] = React.useState({});
  const [profile, setProfile] = React.useState("");

  function handleInputChange(fieldname: any, value: any) {
    setFormData((prevData) => ({
      ...prevData,
      [fieldname]: value,
    }));
  }

  function handleSelectChange(value: any) {
    console.log(value);
    setProfile(value);
  }

  async function handleSubmit() {
    const userData = await getUserInfo();
    const user = { ...formData, profile: profile, ownerId: userData.id };
    if (onSubmit) {
      onSubmit(user, id);
    } else {
      console.error("onSubmit não está definido");
    }
  }

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
            Edite as informações
          </AlertDialogTitle>
          <AlertDialogDescription>
            Preencha com as novas informações que deseja salvar
          </AlertDialogDescription>
        </AlertDialogHeader>
        <form>
          <div className="grid w-full items-center gap-4">
            {fields.map((field) => (
              <>
                <div className="flex flex-col space-y-1.5" key={field.name}>
                  <Label>{field.label}</Label>
                  <Input
                    type={field.type}
                    onChange={(event) =>
                      handleInputChange(field.name, event.target.value)
                    }
                  />
                </div>
              </>
            ))}
            {select && (
              <div className="flex flex-col space-y-1.5 gap-2">
                <Label htmlFor="profile">Perfil</Label>
                <div className="flex">
                  <select
                    onChange={(event) => handleSelectChange(event.target.value)}
                  >
                    {select.map((option) => (
                      <option key={option.value}>{option.value}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>
        </form>
        <AlertDialogFooter>
          <AlertDialogCancel
            className="bg-[#ff0000] text-white font-medium hover:bg-[#ff4444] hover:text-white"
            onClick={() => {
              setFormData([{}]);
            }}
          >
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleSubmit}
            className="bg-[#0055ff] hover:bg-[#2970ff]"
          >
            Atualizar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
