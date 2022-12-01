#!/usr/bin/python3
if __name__ == "__main__":
    import sys
    argv = sys.argv[1:]
    num = len(argv)
    if num == 0:
        print("{}".format(num))
    else:
        ans = []
        for i in range(num):
            ans.append(int(argv[i]))
        print("{}".format(sum(ans)))
