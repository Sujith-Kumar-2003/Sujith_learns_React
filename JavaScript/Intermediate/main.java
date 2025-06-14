import java.util.*;

public class Main {
    public static void main(String[] args) {
        String[][] queries = {
            {"SET", "0", "A", "B", "4"},
            {"SET", "1", "A", "C", "6"},
            {"COMPARE_AND_SET", "2", "A", "B", "4", "9"},
            {"COMPARE_AND_SET", "3", "A", "C", "4", "9"},
            {"COMPARE_AND_DELETE", "4", "A", "C", "6"},
            {"GET", "5", "A", "C"},
            {"GET", "6", "A", "B"}
        };

        String[] result = solution(queries);
        System.out.println(Arrays.toString(result));
    }

    static String[] solution(String[][] queries) {
        class Record {
            Map<String, Integer> fields = new HashMap<>();
        }

        Map<String, Record> db = new HashMap<>();
        List<String> result = new ArrayList<>();

        for (String[] query : queries) {
            String op = query[0];
            String key = query[2];
            String field = query[3];

            switch (op) {
                case "SET": {
                    int value = Integer.parseInt(query[4]);
                    db.computeIfAbsent(key, k -> new Record()).fields.put(field, value);
                    result.add("");
                    break;
                }
                case "COMPARE_AND_SET": {
                    int expected = Integer.parseInt(query[4]);
                    int newVal = Integer.parseInt(query[5]);
                    Record rec = db.get(key);
                    if (rec != null && rec.fields.containsKey(field) && rec.fields.get(field) == expected) {
                        rec.fields.put(field, newVal);
                        result.add("true");
                    } else {
                        result.add("false");
                    }
                    break;
                }
                case "COMPARE_AND_DELETE": {
                    int expected = Integer.parseInt(query[4]);
                    Record rec = db.get(key);
                    if (rec != null && rec.fields.containsKey(field) && rec.fields.get(field) == expected) {
                        rec.fields.remove(field);
                        result.add("true");
                    } else {
                        result.add("false");
                    }
                    break;
                }
                case "GET": {
                    Record rec = db.get(key);
                    if (rec != null && rec.fields.containsKey(field)) {
                        result.add(String.valueOf(rec.fields.get(field)));
                    } else {
                        result.add("");
                    }
                    break;
                }
            }
        }

        return result.toArray(new String[0]);
    }
}
