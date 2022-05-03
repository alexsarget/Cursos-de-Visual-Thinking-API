const Reader=require("./../utils/Reader");
const VisualPartnerServices=require("./../services/VisualPartnersService");

class VisualPartnerController{
    static getPartnersInfo(explorers){
        const list=Reader.readJsonFile(explorers);
        return list;
    }

    static getEmail(certication){
        const explorer=Reader.readJsonFile("visualpartners.json");
        const email=VisualPartnerServices.ConsultbyEmail(explorer,certication);
        return email;
    }
    static getcredit(credits){
        const explorer=Reader.readJsonFile("visualpartners.json");
        const partnercredits=VisualPartnerServices.ConsultCredits(explorer,credits);
        return partnercredits;
    }
}


module.exports=VisualPartnerController;