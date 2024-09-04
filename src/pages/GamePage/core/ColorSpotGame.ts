class ColorSpotGame {
    getNumber(): { arr: number[] } {
        // สร้างอาร์เรย์และสุ่มตัวเลขระหว่าง 0 ถึง 9
        
        let arr = [];
        for (let i = 0; i < 4; i++) {
            let randomNumber = Math.floor(Math.random() * 10); // สุ่มเลขระหว่าง 0 ถึง 9
            arr.push(randomNumber); // ใส่เลขที่สุ่มได้ลงในอาร์เรย์
        }
        
        return { arr }; // คืนค่าอาร์เรย์
    }
    
    // getResult(): number {
    //     let result = 24; 
    //     return result;   
    // }
}

export default ColorSpotGame;