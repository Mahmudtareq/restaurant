"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

//
// ✅ Step 2.1 — Define schema
//
const reservationSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters long.")
    .max(50, "Name is too long."),
  phone: z.string().regex(/^\+?\d{7,15}$/, "Enter a valid phone number."),
  people: z
    .string()
    .min(1, "Please enter number")
    .refine((val) => Number(val) > 0, "Number of people must be at least 1."),
  date: z.string().min(1, "Please select a date."),
  time: z.string().min(1, "Please select a time slot."),
  requests: z.string().optional(),
});

type FormData = z.infer<typeof reservationSchema>;

interface ReservationModalProps {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReservationModal = ({ open, setOpen }: ReservationModalProps) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = typeof open !== "undefined" && !!setOpen;
  const currentOpen = isControlled ? open! : internalOpen;
  const [openCalendar, setOpenCalendar] = useState(false);

  //
  // ✅ Step 2.2 — Hook form with Zod resolver
  //
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      name: "",
      phone: "",
      people: "",
      date: "",
      time: "",
      requests: "",
    },
  });

  //
  // ✅ Step 2.3 — Submit handler
  //
  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    toast.success("Form Successfully Submitted!");
    if (isControlled) setOpen!(false);
    else setInternalOpen(false);
    reset();
  };

  const handleOpenChange = (value: boolean) => {
    if (isControlled) setOpen!(value);
    else setInternalOpen(value);
  };

  return (
    <Dialog open={currentOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="bg-[#f5f0e8] sm:max-w-[650px] rounded-[2px] p-0 gap-0 border-primary">
        <div className="relative px-4 py-8">
          <DialogHeader>
            <DialogTitle className="text-center text-xl lg:text-[40px] md:text-[28px] font-serif_display md:leading-[46px] leading-[18px] font-normal">
              Book A Table
            </DialogTitle>
            <p className="text-center font-montserrat md:text-lg text-sm font-medium mb-6">
              Please fill the form below and we will call you back.
            </p>
          </DialogHeader>

          <div className="flex items-center justify-center gap-4 mb-8 text-sm">
            <span className="text-sm md:text-base font-medium font-montserrat">
              Sat–Thu: 11 AM – 11 PM
            </span>
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm md:text-base font-medium font-montserrat">
              Fri: 1 PM – 11 PM
            </span>
          </div>

          {/* ✅ FORM */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <Input
                {...register("name")}
                placeholder="Your Name"
                className="bg-transparent border-0 border-b-2 border-dashed focus:border-[#1B1B1B] rounded-none border-gray-400 px-0 focus-visible:ring-0 focus-visible:border-gray-600"
              />
              {errors.name && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Phone & People */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Input
                  {...register("phone")}
                  type="tel"
                  placeholder="Your Phone"
                  className="bg-transparent border-0 border-b-2 border-dashed border-gray-400 rounded-none px-0 focus-visible:ring-0 focus-visible:border-gray-600"
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <Input
                  {...register("people")}
                  type="number"
                  placeholder="Amount of people"
                  min="1"
                  className="bg-transparent border-0 border-b-2 border-dashed border-gray-400 rounded-none px-0 focus-visible:ring-0 focus-visible:border-gray-600"
                />
                {errors.people && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.people.message}
                  </p>
                )}
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Controller
                  control={control}
                  name="date"
                  render={({ field }) => (
                    <Popover open={openCalendar} onOpenChange={setOpenCalendar}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={` w-full justify-between text-left hover:bg-gray-300 font-normal border-0 border-b-2 border-dashed border-gray-400 rounded-none px-0 ${
                            !field.value ? "text-gray-500" : "text-black"
                          } `}
                        >
                          {field.value
                            ? format(new Date(field.value), "dd/MM/yyyy")
                            : "DD/MM/YYYY"}
                          <CalendarIcon className="mr-2 h-4 w-4" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={
                            field.value ? new Date(field.value) : undefined
                          }
                          onSelect={(date) => {
                            field.onChange(
                              date ? date.toISOString().split("T")[0] : ""
                            );
                            setOpenCalendar(false); // ✅ closes popover automatically
                          }}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  )}
                />
                {errors.date && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.date.message}
                  </p>
                )}
              </div>

              <div>
                <Controller
                  control={control}
                  name="time"
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="bg-transparent border-0 border-b-2 w-full border-[#1B1B1B] rounded-none px-0 focus:ring-0">
                        <SelectValue placeholder="Please Select" />
                      </SelectTrigger>
                      <SelectContent className="">
                        <SelectItem
                          value="breakfast"
                          className="text-sm md:text-base font-medium font-montserrat"
                        >
                          Breakfast: 8 AM – 10 AM
                        </SelectItem>
                        <SelectItem
                          value="lunch"
                          className="text-sm md:text-base font-medium font-montserrat"
                        >
                          Lunch: 12 PM – 2 PM
                        </SelectItem>
                        <SelectItem
                          value="dinner"
                          className="text-sm md:text-base font-medium font-montserrat"
                        >
                          Dinner: 8 PM – 11 AM
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.time && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.time.message}
                  </p>
                )}
              </div>
            </div>

            {/* Requests */}
            <div>
              <Textarea
                {...register("requests")}
                placeholder="Special Requests"
                className="bg-transparent border-0 border-b-2 border-dashed border-gray-400 rounded-none px-0 resize-none focus-visible:ring-0 focus-visible:border-gray-600 min-h-[80px]"
              />
              {errors.requests && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.requests.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-transparent hover:bg-orange-50 text-primary border border-primary py-6 text-lg font-semibold rounded-[4px] transition-all cursor-pointer"
            >
              SUBMIT
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReservationModal;
