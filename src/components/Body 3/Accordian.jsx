import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const FAQData = [
  {
    question: "What services do you offer for businesses?",
    answer:
      "We offer a range of services including digital marketing, branding, UI/UX design, web development, and ongoing support to help businesses grow and succeed in the digital landscape.",
  },
  {
    question: "How can your solutions help grow my business?",
    answer:
      "Our solutions are tailored to your specific needs, focusing on enhancing your online presence, improving customer engagement, and optimizing conversion rates, ultimately driving growth and revenue.",
  },
  {
    question: "Do you provide customized strategies for different industries?",
    answer:
      "Yes, we understand that each industry has unique challenges and opportunities. We work closely with you to develop customized strategies that align with your business goals and industry standards.",
  },
  {
    question: "How long does it take to develop a fully functional website?",
    answer:
      "The timeline varies depending on the project complexity, but we typically complete the initial development within 4-8 weeks, followed by testing and revisions based on your feedback.",
  },
];

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-8">
      {FAQData.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary
            aria-controls={`panel${index}d-content`}
            id={`panel${index}d-header`}
          >
            <Typography className="font-medium">{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-gray-600">{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
