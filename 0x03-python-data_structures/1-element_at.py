#!/usr/bin/python3
def element_at(my_list, idx):
    i = 0
    while i < len(my_list):
        if idx < 0:
            return none
        elif idx > len(my_list) or idx == len(my_list):
            return none
        else:
            return my_list[idx]
