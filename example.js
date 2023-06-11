function findOutlier(nums) {
        let s1 = 0;
        let s2 = 0;
        let n1 = 0;
        let n2 = 0;
        for (let i = 0; i < nums.length; i++) {
                if (nums[i] % 2 == 0) {
                        s1 += 1;
                        n1 = nums[i];
                }
                else {
                        n2 = nums[i];
                }
        }
        if (s1 > 1) {
                return n2;
        } else {
                return n1;
        }

}
console.log(findOutlier([1, 2, 4, 10]));
let a = '12';
let b = '13';
console.log(a + b);
console.log(b = a + 1)
console.log(++a)
for (a = 1, b = 2; a < 10; a += b);
console.log(a)
console.log('assert' - 4);
console.log('4' - 2)
console.log('1/2')

// let army { 
//         minAge : 18,
//         maxAge : 30,
//         canJoin(){
//                 if 
//         }
// }
