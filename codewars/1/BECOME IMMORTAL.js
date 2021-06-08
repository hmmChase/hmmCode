/*
In the nation of CodeWars, there lives an Elder who has lived for a long time.
Some people call him the Grandpatriarch, but most people just refer to him as
the Elder.

There is a secret to his longetivity: he has a lot of young worshippers, who
regularly perform a ritual to ensure that the Elder stays immortal:

The worshippers line up in a magic rectangle, of dimensions m and n.
They channel their will to wish for the Elder. In this magic rectangle, any
worshipper can donate time equal to the xor of the column and the row
(zero-indexed) he's on, in seconds, to the Elder.

However, not every ritual goes perfectly. The donation of time from the
worshippers to the Elder will experience a transmission loss l (in seconds).
Also, if a specific worshipper cannot channel more than l seconds, the Elder
will not be able to receive this worshipper's donation.

The estimated age of the Elder is so old it's probably bigger than the total
number of atoms in the universe. However, the lazy programmers (who made a big
  news by inventing the Y2K bug and other related things) apparently didn't
  think thoroughly enough about this, and so their simple date-time system can
  only record time from 0 to t-1 seconds. If the elder received the total
  amount of time (in seconds) more than the system can store, it will be
  wrapped around so that the time would be between the range 0 to t-1.

Given m, n, l and t, please find the number of seconds the Elder has received,
represented in the poor programmer's date-time system.

(Note: t will never be bigger than 2^32 - 1, and in JS, 2^26 - 1.)
*/
