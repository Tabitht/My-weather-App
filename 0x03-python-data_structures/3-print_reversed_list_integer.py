#!/usr/bin/python3
def print_reversed_list_integer(my_list=[]):
    k = len(my_list)
    for i in range(k):
        print("{:d}".format(my_list[k - 1]))
        k = k - 1
