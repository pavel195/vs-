var countBits = function(n) {
        // Program Me
        let c =0;
        n_2 = n.toString(2);
        console.log(n_2)
        for (let i =0; i < n_2.length; i++){
                if (n_2[i]=='1'){
                        c++
                }
        }
        return c
      };
console.log(countBits(12))