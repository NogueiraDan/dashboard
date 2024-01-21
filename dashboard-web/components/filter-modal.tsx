import React from "react";
import { Button } from "./ui/button";

export default function FilterModal() {
  const [open, setOpen] = React.useState(false);
  const [selectedCheckboxes, setSelectedCheckboxes] = React.useState([]);
  const filtersData = [
    { id: "suplemento", value: "suplemento", label: "Suplemento" },
    { id: "remedio", value: "remedio", label: "Remedio" },
  ];
  const brandsData = [
    { id: "maxtitanium", value: "maxtitanium", label: "Max Titanium" },
    { id: "generico", value: "generico", label: "Generico" },
  ];

  function handleOpenModal() {
    setOpen(true);
  }
  function handleCloseModal() {
    setOpen(false);
  }
  function handleSelect(event: any) {
    const { id, checked } = event.target;
    const updatedCheckboxes = checked
      ? [...selectedCheckboxes, { id, value: id }]
      : selectedCheckboxes.filter((checkbox) => checkbox.id !== id);

    setSelectedCheckboxes(updatedCheckboxes);
  }

  React.useEffect(() => {
    const savedCheckboxes =
      JSON.parse(localStorage.getItem("selectedCheckboxes")) || [];
    setSelectedCheckboxes(savedCheckboxes);
  }, []);

  React.useEffect(() => {
    localStorage.setItem(
      "selectedCheckboxes",
      JSON.stringify(selectedCheckboxes)
    );
  }, [selectedCheckboxes]);

  return (
    <div>
      <Button onClick={handleOpenModal} variant={"outline"}>
        Filtros
      </Button>

      {open && (
        <div className="fixed z-50 top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-end">
          <div className="p-4 bg-white rounded-lg w-[33%]">
            <div className="flex justify-between mb-8">
              <h2>Titulo</h2>
              <button onClick={handleCloseModal}>Fechar</button>
            </div>
            <div className="mb-3">
              <p>Categoria</p>
              {filtersData.map((filter) => (
                <div
                  key={filter.id}
                  className="focus:bg-accent flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    id={filter.id}
                    value={filter.value}
                    onChange={handleSelect}
                    checked={selectedCheckboxes.some(
                      (checkbox) => checkbox.id === filter.id
                    )}
                  />
                  <label htmlFor={filter.id} className="text-sm font-medium">
                    {filter.label}
                  </label>
                </div>
              ))}
            </div>
            <div>
              <p>Marca</p>
              {brandsData.map((filter) => (
                <div
                  key={filter.id}
                  className="focus:bg-accent flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    id={filter.id}
                    value={filter.value}
                    onChange={handleSelect}
                    checked={selectedCheckboxes.some(
                      (checkbox) => checkbox.id === filter.id
                    )}
                  />
                  <label htmlFor={filter.id} className="text-sm font-medium">
                    {filter.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
