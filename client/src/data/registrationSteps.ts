import type { Step } from "../types";

export const registrationSteps: Step[] = [
    {
        number: 1,
        title: "Anmäl den assistansberättigade till IVO.",
        description: "För att den ska registreras som egen arbetsgivare: IVO kommer sedan posta bekräftelse att personen är registrerad som egen arbetsgivare. Denna process tar",
        estimate: "1-2 veckor",
        link: "https://www.ivo.se/blanketter"
    },
    {
        number: 2,
        title: "Registrera den assistansberättigade som arbetsgivare via blanketten (SKV4620).",
        description: "Skatteverket kommer skicka registerutdrag när dem har registrerat personen som arbetsgivare. ",
        estimate: "2-3 veckor",
        link: "https://www.skatteverket.se/privat/blanketter/alla-blanketter/skv-4620.html"
    },
    {
        number: 3,
        title: "Anmäl till Försäkringskassan (FK)",
        description: "Anmäl att personen ska anordna assistansen genom att skicka blankett FK 3079. Det är viktigt att ange bankkonto kopplat till den assistansberättigade eller anhörig för kontokontroll. Skicka gärna med IVO-bekräftelse och registerutdrag för snabbare handläggning.",
        estimate: "2-4 veckor",
        link: "https://www.forsakringskassan.se/blanketter/3079",
        subLink: { text: "skicka blankett FK 3079", url: "https://www.forsakringskassan.se/blanketter/3079" }
    },
    {
        number: 4,
        title: "Skicka in anställningsuppgifter",
        description: "När FK har registrerat personen som egen arbetsgivare börjar assistansen. När personen börjar anställa sina assistenter så behöver den skicka en blankett som heter 3066. Denna blankett är motsvarande anställningsavtal. Utan den blanketten kan Försäkringskassan inte lägga in vilka assistenter som arbetar för personen.",
        estimate: "Vid anställning",
        link: "https://www.blankett/3066",
        subLink: { text: "skicka en blankett som heter 3066", url: "https://www.blankett/3066" }
    },
    {
        number: 5,
        title: "Anmäl till Fora",
        description: "Nu är det dags att anmäla arbetsgivaren till Fora, så det finns försäkring och tjänstepension till assistenterna. Detta är frivilligt,men starkt rekommenderat.",
        estimate: "Löpande",
        link: "https://www.fora.se/blanketter"
    },
    {
        number: 6,
        title: "Schema och avtal",
        description: "Alla assistenter ska få anställningsavtal och det ska skapas arbetsschema. Här rekommenderar vi att man ska använda en teknisk leverantör för schemaläggning då dem är integrerade med Försäkringskassan och assistenterna, samt har möjlighet att skriva under med Mobilt Bank-ID.",
        estimate: "Löpande",
        link: "https://www.schema-avtal.se/blanketter",
        subLink: { text: "skapas arbetsschema", url: "https://www.schema-avtal.se/blanketter" }
    }
];
