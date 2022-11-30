#!/usr/bin/python3
def fizzbuzz():
    for i in range(1, 101):
        if i % 3 == 0 and i % 5 == 0:
            continue
            print("FizzBuzz")
        elif i % 3 == 0:
            continue
            print("Fizz")
        elif i % 5 == 0:
            continue
            print("Buzz", end=" ")
        else:
            print("{:d}".format(i), end=" ")
