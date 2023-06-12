# The problem statement

At NICE Digital we process text content and index it for searching. Stemming is the process for reducing words to their stem, base or root form. For example the stemmed form of 'classes' is 'class'.

Write code that processes the some input text to determine the frequency of the stemmed words within it. Please see the acceptance criteria below. Your solution should cope with other input texts containing those terms.

### Acceptance criteria

Given the example sentence:

_"Friends are friendlier friendlies that are friendly and classify the friendly classification class. Flowery flowers flow through following the flower flows."_

When asked for the following words, return the associated frequency count of the stem of the word as specified below

| Word             | Frequency |
| ---------------- | --------- |
| "following"      | 1         |
| "flow"           | 2         |
| "classification" | 3         |
| "class"          | 3         |
| "flower"         | 3         |
| "friend"         | 5         |
| "friendly"       | 5         |
| "classes"        | 3         |

