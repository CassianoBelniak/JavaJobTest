/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package distinct;

import java.util.HashMap;
import java.util.Map;

/**
 *
 * @author Katuiche
 */
public class Solution {
    public int solution(int[] A){
        Map<Integer,Integer> map = new HashMap<Integer,Integer>();//hashmap declaration
        
        for (int num: A){//iterate throught array
            map.put(num, 1);//put a value for each element on array
        }

        return map.size();//return number of elements on the map
    }
}
