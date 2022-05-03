const VisualPartnerController = require("./controllers/VisualPartnerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;


app.get("/v1/explorers/:explorersInfo", (req, res) => {
    const explorers=("visualpartners.json");
    const explorersInMission=VisualPartnerController.getPartnersInfo(explorers);
    res.json(explorersInMission);
});

app.get("/v1/explorers/emails/:certication",(request,response)=>{
    console.log(`Get by ID Explorers V1 Api ${new Date()}`);
    const certication=request.params.certication;
    const email=VisualPartnerController.getEmail(Boolean(certication));
    response.json({Certification: certication, Emails: email});

});
app.get("/v1/explorers/credit/:credits",(request,response)=>{
    console.log(`Get by ID Explorers V1 Api ${new Date()}`);
    const credits=request.params.credits;
    const partner=VisualPartnerController.getcredit(500);
    response.json({Credits: "Partners con creditos mayores a " + credits, Info: partner});

});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});