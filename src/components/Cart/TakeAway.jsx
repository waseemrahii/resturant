import { Radio, RadioGroup, FormControlLabel, TextField } from "@mui/material";
import { MdOutlineArrowDropDown, MdPayments } from "react-icons/md";
import { PiNotePencilBold } from "react-icons/pi";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import BankSelector from "./BankSelector";
import { FaGlobe } from "react-icons/fa";
import TakeAwayCart from "./Child/TakeAwayCart";

const steps = [
  {
    label: "Net Banking",
    description: (
      <RadioGroup name="payment-method">
        <FormControlLabel
          value="cod"
          control={<Radio />}
          label="Cash on Delivery"
        />
        <FormControlLabel
          value="razorpay"
          control={<Radio />}
          label="RazorPay"
        />
        <FormControlLabel value="stripe" control={<Radio />} label="Stripe" />
        <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
        <FormControlLabel value="payfast" control={<Radio />} label="PayFast" />
        <FormControlLabel
          value="paystack"
          control={<Radio />}
          label="PayStack"
        />
        <FormControlLabel
          value="flutterwave"
          control={<Radio />}
          label="FlutterWave"
        />
        <FormControlLabel
          value="mercadopago"
          control={<Radio />}
          label="MercadoPago"
        />
        <FormControlLabel
          value="wallet"
          control={<Radio />}
          label="Wallet (You have)"
        />
      </RadioGroup>
    ),
    icon: (
      <MdPayments className="w-8 h-8 bg-primary-900 p-2 rounded-full text-white" />
    ),
  },
  {
   icon: (
      <PiNotePencilBold className="w-8 h-8 bg-primary-900 p-2 rounded-full text-white" />
    ),
  },
];

const TakeAway = () => {
  const summaryItems = [
    { label: "Sub Total", value: "$0" },
    { label: "Delivery Charge", value: "$0" },
  ];

  const total = 0;

  return (
    <>
      <div className="flex flex-col lg:flex-row w-full gap-2 p-4">
        <div className="flex flex-col w-full lg:w-[70%]">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-2 mb-4">
              <div className="items-center">{step.icon}</div>
              <div className="w-full shadow-md p-2 rounded-lg">
                {index === 0 ? (
                  <>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<MdOutlineArrowDropDown />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className="flex justify-center items-center gap-2 font-semibold text-xs">
                          <FaGlobe />
                          {step.label}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <BankSelector />
                      </AccordionDetails>
                    </Accordion>
                    {step.description}
                  </>
                ) : (
                  <>
                    <div className="font-semibold text-sm">Add Note</div>
                    <div className="mt-2">
                      <TextField
                        label="Add Note"
                        multiline
                        rows={4}
                        variant="outlined"
                        fullWidth
                      />
                    </div>
                  </>
                )}

                
              </div>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-[30%]">
          <TakeAwayCart
            summaryItems={summaryItems}
            total={total}
          />
        </div>
      </div>
    </>
  );
};

export default TakeAway;
