// bài tập thuế
function ex3() {
    // khai báo biến;
    // input khai báo biến
    var taxfee;
    var totalIncome = 900;
    var totalHead = 4;
    // tính tiền chua67 trả thuế theo đề
    var incomeUnderTax = totalIncome - 4 - totalHead * 1.6;
    console.log("Thu nhập chưa trả thuế là:", incomeUnderTax + " triệu đồng")
    // xét trường hợp thuê
    if (incomeUnderTax <= 60) {
        taxfee = incomeUnderTax * 0.05;

    } else if (incomeUnderTax > 60 && incomeUnderTax <= 120) {
        taxfee = incomeUnderTax * 0.1;

    } else if (incomeUnderTax > 120 && incomeUnderTax <= 210) {
        texfee = incomeUnderTax * 0.15;
    } else if (incomeUnderTax > 210 && incomeUnderTax <= 384) {
        texfee = incomeUnderTax * 0.2;
    } else if (incomeUnderTax > 384 && incomeUnderTax <= 624) {
        texfee = incomeUnderTax * 0.2;
    } else if (incomeUnderTax > 624 && incomeUnderTax <= 960) {
        texfee = incomeUnderTax * 0.25;
    } else if (incomeUnderTax > 960) {
        texfee = incomeUnderTax * 0.35;
    }
    console.log("Tiền thuế là: ", texfee + " triệu đồng");
}
ex3();

// bài tập cáp
function ex4() {
    // khia báo biến
    console.log("MÃ KH 2051150087");
    var billND = 4.5;
    var billDN = 15;
    var basicServiceND = 20.5;
    var basicServiceDN = 7.5;
    var vipChanelND = 7.5;
    var vipChanelDN = 50;

// khai báo biến số lương đầu vào
    var basicChanelND = 20;
    var basicChanelDN = 20;
    var vipNumberChannelND = 30;
    var vipNumberChannelDN = 30;
    var totalFeeND;
    var totalfeeDN;
    // Nhà dân dk
    console.log("Loại KH:Nhà Dân");
    totalFeeND = billND + basicServiceND * basicChanelND + vipChanelND * vipNumberChannelND;
    console.log("Số tiền cáp với nhà dân", totalFeeND)
// DN dk
    console.log("Loại KH:Doanh Nghiệp");
    if (basicChanelDN <= 10) {
        totalfeeDN = billDN + basicServiceDN * basicChanelDN + vipChanelDN * vipNumberChannelDN;
    } else if (basicChanelDN > 10) {
        totalfeeDN = billDN + ((basicServiceDN * 10)+(basicChanelDN-10)*(basicServiceDN+5)) + vipChanelDN * vipNumberChannelDN;
    }
    console.log("Số tiền cáp với doanh nghiệp", totalfeeDN)

}
ex4();    
