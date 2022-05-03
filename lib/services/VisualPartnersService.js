class VisualPartnerServices{
    static InfoPartner(explorers){
        const info=explorers;
        return this.InfoPartner;
    }
    static ConsultbyEmail(explorers, certication){
        const explorerByCertificaction = explorers.filter((explorer) => explorer.haveCertification == certication);
        const getInfoEmail= explorerByCertificaction.map((explorer)=>explorer.email);
        return getInfoEmail;
    }

    static ConsultCredits(explorer,credits){
        const credit=explorer.filter((explorer)=> explorer.credits >= credits);
        return credit;
    }
}

module.exports=VisualPartnerServices;