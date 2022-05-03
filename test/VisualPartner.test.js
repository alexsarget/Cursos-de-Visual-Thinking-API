
const VisualPartnerController=require("./../lib/controllers/VisualPartnerController");
const VisualPartnerServices=require("./../lib/services/VisualPartnersService");


describe("Test Para Visual PartnerService",()=>{
    test("Requerimiento 1: Obtencion de los emails de los explorers con certificación",()=>{
        const email=VisualPartnerController.getEmail(true);
        expect(email).toContain("Todd@visualpartnership.xyz");
    });

    test("Requerimiento 2: Obtencion de los explorers con creditos mayores a 500",()=>{
        const partners=[{
            "id": "6264d5d85cf81c496446b67f",
            "name": "Lucinda",
            "email": "Sexton@visualpartnership.xyz",
            "credits": 677,
            "enrollments": [
                "Visual Thinking Avanzado"
            ],
            "previousCourses": 6,
            "haveCertification": true
        },
        {
            "id": "6264d5d8cda17de0d2e9f236",
            "name": "Fuentes",
            "email": "Sharlene@visualpartnership.xyz",
            "credits": 210,
            "enrollments": [
                "Visual Thinking Avanzado"
            ],
            "previousCourses": 10,
            "haveCertification": true
        }
        ];
        const result=[{
            "id": "6264d5d85cf81c496446b67f",
            "name": "Lucinda",
            "email": "Sexton@visualpartnership.xyz",
            "credits": 677,
            "enrollments": [
                "Visual Thinking Avanzado"
            ],
            "previousCourses": 6,
            "haveCertification": true
        }];

        const credit=VisualPartnerServices.ConsultCredits(partners,500);
        expect(credit).toStrictEqual(result);
    });

});