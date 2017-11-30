/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package array;

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
            if (map.get(num) != null){//if value exists on map, remove it
                map.remove(num);
            } else {//else add it to map
                map.put(num, 1);
            }
        }
        
        for (int num: map.keySet()){//iterate to get the only element remaining
            return num;
        }
        return 0;//default return
        
    }
}
