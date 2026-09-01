import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { PlusCircle, ShieldAlert, Send } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const demandFormSchema = z.object({
  vessel: z.string().min(2, { message: "Vessel name must be at least 2 characters." }),
  hullNumber: z.string().min(2, { message: "Hull number required (e.g., DDG-115, CVN-68)." }),
  material: z.string().min(3, { message: "Material/part description is required." }),
  quantity: z.coerce.number().min(1, { message: "Quantity must be at least 1." }),
  priority: z.enum(["Low", "Medium", "High", "Immediate"], {
    message: "Select a valid priority level.",
  }),
  coordinates: z.string().min(5, { message: "GPS Coordinates required for delivery." }),
});

export type DemandFormValues = z.infer<typeof demandFormSchema>;

interface VetteDemandDialogProps {
  onDemandCreated?: (data: DemandFormValues) => void;
  trigger?: React.ReactNode;
}

export const VetteDemandDialog: React.FC<VetteDemandDialogProps> = ({
  onDemandCreated,
  trigger,
}) => {
  const [open, setOpen] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  const form = useForm<DemandFormValues>({
    resolver: zodResolver(demandFormSchema),
    defaultValues: {
      vessel: "USS Nimitz",
      hullNumber: "CVN-68",
      material: "",
      quantity: 1,
      priority: "Medium",
      coordinates: "14°21'44\"N 144°45'18\"E",
    },
  });

  const onSubmit = (data: DemandFormValues) => {
    if (onDemandCreated) {
      onDemandCreated(data);
    }
    setSubmittedMessage(`Demand for ${data.vessel} [${data.hullNumber}] vetted and dispatched!`);
    setTimeout(() => {
      setSubmittedMessage(null);
      setOpen(false);
      form.reset();
    }, 1200);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="default" className="w-full justify-between h-12">
            <span>VETTE NEW DEMAND</span>
            <PlusCircle className="w-4 h-4" />
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="max-w-md sm:max-w-lg">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-primary" />
            <DialogTitle>Vette & Authorize Naval Demand</DialogTitle>
          </div>
          <DialogDescription>
            Submit an authenticated logistics supply demand request for active fleet assets.
          </DialogDescription>
        </DialogHeader>

        {submittedMessage ? (
          <div className="p-4 rounded bg-badge-secure-bg border border-badge-secure-border text-center space-y-1 my-4">
            <div className="text-xs font-mono font-bold text-badge-secure-text uppercase">
              TRANSMISSION CONFIRMED
            </div>
            <p className="text-xs text-foreground font-mono">{submittedMessage}</p>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3.5 pt-2">
              <div className="grid grid-cols-2 gap-3">
                <FormField
                  control={form.control}
                  name="vessel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vessel Name</FormLabel>
                      <FormControl>
                        <Input placeholder="USS Nimitz" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="hullNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Hull / Asset ID</FormLabel>
                      <FormControl>
                        <Input placeholder="CVN-68" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="material"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Material / Part Specification</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Turbine Rotor Assembly, MK-48 Parts" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-3">
                <FormField
                  control={form.control}
                  name="quantity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quantity Required</FormLabel>
                      <FormControl>
                        <Input type="number" min={1} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="priority"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Priority Level</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select priority" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Low">Low (Routine)</SelectItem>
                          <SelectItem value="Medium">Medium (Scheduled)</SelectItem>
                          <SelectItem value="High">High (Impending Shortage)</SelectItem>
                          <SelectItem value="Immediate">Immediate (DEFCON Urgent)</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="coordinates"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Delivery GPS Coordinates</FormLabel>
                    <FormControl>
                      <Input placeholder="14°21'44&quot;N 144°45'18&quot;E" {...field} />
                    </FormControl>
                    <FormDescription>
                      Designate rendezvous station or port destination.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" variant="actionGradient" className="gap-2">
                  <Send className="w-3.5 h-3.5" />
                  <span>Authorize & Dispatch</span>
                </Button>
              </DialogFooter>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default VetteDemandDialog;
