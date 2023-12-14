/*


Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/
//method one with for loops
function twosum(){
 let nums = [2,7,11,15];
 let  target = 9;
    for (let i = 0; i<nums.length; i++){
        for (let j = i+1; j<nums.length; j++){
            if (nums[i] + nums[j] == target){
                console.log({i,j})
            }
        }
    }

}
twosum()

// method two with Map

function Twosum(){
    let nums = [2,7,11,15];
    let  target = 9;
    var a = new Map();

    for(let i = 0; i<nums.length; i++){
        var diff = target - nums[i];

        if (a.has(diff)) {
            console.log( [i, a.get(diff)])
        }
        
        a.set(nums[i], i)
    }
}
Twosum()