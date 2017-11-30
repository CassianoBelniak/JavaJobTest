/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package euclidean;

import java.util.HashMap;
import java.util.Map;

/**
 *
 * @author Katuiche
 */
public class Solution {
    public int solution(int N, int M){
        int x = 0;
        Map<Integer,Integer> map = new HashMap<Integer,Integer>();//hashmap declaration
        
        while (map.get(x) == null){//check if chocolate was eaten
            map.put(x, 1);//if not, eat it
            x = (x + M) % N;//go to next chocolate
        }
        
        return map.size();//return eaten chocolates
    }
}
