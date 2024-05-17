import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import {
  discount_bin,
  distance_bin,
  month,
  price_bin,
  week,
} from "@/constants";

export default function FormDialog({ onSubmit }) {
  const [formData, setFormData] = useState({
    price_bin: 0,
    discount_bin: 0,
    month: 0,
    week: 0,
    distance_bin: 0,
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleSelectChange = (value, name) => {
    setFormData((prev) => ({
      ...prev,
      [name]: parseInt(value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Predict Record</Button>
      </DialogTrigger>
      <DialogContent className="rounded-lg sm:max-w-[500px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader className="py-4 text-left">
            <DialogTitle>Predict Record</DialogTitle>
            <DialogDescription>
              Fill out the form below to predict a record.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-4 items-center gap-4 py-4">
            <Label htmlFor="price_bin">Price</Label>
            <Select
              onValueChange={(value) => handleSelectChange(value, "price_bin")}
              required
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select Price" id="price_bin" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(price_bin).map(([priceName, value]) => (
                  <SelectItem key={value} value={value.toString()}>
                    {priceName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Label htmlFor="discount_bin">Discount</Label>
            <Select
              onValueChange={(value) =>
                handleSelectChange(value, "discount_bin")
              }
              required
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select Discount" id="discount_bin" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(discount_bin).map(([discountName, value]) => (
                  <SelectItem key={value} value={value.toString()}>
                    {discountName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Label htmlFor="month">Month</Label>
            <Select
              onValueChange={(value) => handleSelectChange(value, "month")}
              required
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select Month" id="month" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(month).map(([monthName, value]) => (
                  <SelectItem key={value} value={value.toString()}>
                    {monthName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Label htmlFor="week">Week</Label>
            <Select
              onValueChange={(value) => handleSelectChange(value, "week")}
              required
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select Week" id="week" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(week).map(([weekName, value]) => (
                  <SelectItem key={value} value={value.toString()}>
                    {weekName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Label htmlFor="distance_bin">Distance</Label>
            <Select
              onValueChange={(value) =>
                handleSelectChange(value, "distance_bin")
              }
              required
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select Distance" id="distance_bin" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(distance_bin).map(([distanceName, value]) => (
                  <SelectItem key={value} value={value.toString()}>
                    {distanceName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <Button type="submit" className="font-medium dark:text-black">
              Predict
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
