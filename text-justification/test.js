import test from 'ava';
import justify from './index.js';

test('Test Case 1', t => {
    let answer = justify(
        ["This", "is", "an", "example", "of", "text", "justification."],
        16
    );

    t.deepEqual(
        answer,
        ["This    is    an","example  of text","justification.  "]
    );
});

test('Test Case 2', t => {
    let answer = justify(
        ["What","must","be","acknowledgment","shall","be"],
        16
    );

    t.deepEqual(
        answer,
        ["What   must   be","acknowledgment  ","shall be        "]
    );
});

test('Test Case 3', t => {
    let answer = justify(
        ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"],
        20
    );

    t.deepEqual(
        answer,
        ["Science  is  what we","understand      well","enough to explain to","a  computer.  Art is","everything  else  we","do                  "]
    );
});


test('Test Case 4', t => {
    let answer = justify(
        ["My","momma","always","said,","\"Life","was","like","a","box","of","chocolates.","You","never","know","what","you're","gonna","get."],
        20
    );

    t.deepEqual(
        answer,
        ["My    momma   always","said, \"Life was like","a box of chocolates.","You  never know what","you're gonna get.   "]
    );
});

test('Test Case 5', t => {
    let answer = justify(
        ["Don't","go","around","saying","the","world","owes","you","a","living;","the","world","owes","you","nothing;","it","was","here","first."],
        30
    );

    t.deepEqual(
        answer,
        ["Don't  go  around  saying  the","world  owes  you a living; the","world owes you nothing; it was","here first.                   "]
    );
});

test('Test Case 6', t => {
    let answer = justify(
        ["ask","not","what","your","country","can","do","for","you","ask","what","you","can","do","for","your","country"],
        16
    );

    t.deepEqual(
        answer,
        ["ask   not   what","your country can","do  for  you ask","what  you can do","for your country"]
    );
});