import random
import dices as d

def ini():
    dice = d.roll20()
    if dice <= 10:
        print("Result: " + str(dice) + "\n--> To F1\n")
        f1()
    elif dice > 10:
        print("Result: " + str(dice) + "\n--> To F2\n")
        f2()

def f1():
    dice = d.roll20()
    if dice <= 10:
        print("Result: " + str(dice) + "\n--> To F11\n")
        f11()
    elif dice > 10:
        print("Result: " + str(dice) + "\n--> To F12\n")
        f12()

def f11():
    dice = d.roll20()
    if dice <= 10:
        print("Result : " + str(dice) + "\n--> To F111\n")
        f111()
    elif dice > 10:
        print("Result : " + str(dice) + "\n--> To F112\n")
        f112()

def f12():
    dice = d.roll20()
    if dice <= 10:
        print("Result : " + str(dice) + "\n--> To F121\n")
        f121()
    elif dice > 10:
        print("Result : " + str(dice) + "\n--> To F122\n")
        f122()

def f111():
    dice = d.roll20()
    print("Final result : " + str(dice))

def f112():
    dice = d.roll20()
    print("Final result : " + str(dice))

def f121():
    dice = d.roll20()
    print("Final result : " + str(dice))

def f122():
    dice = d.roll20()
    print("Final result : " + str(dice))

def f2():
    dice = d.roll20()
    if dice <= 10:
        print("Result: " + str(dice) + "\n--> To F21\n")
        f21()
    elif dice > 10:
        print("Result: " + str(dice) + "\n--> To F22\n")
        f22()

def f21():
    dice = d.roll20()
    if dice <= 10:
        print("Result : " + str(dice) + "\n--> To f211\n")
        f211()
    elif dice > 10:
        print("Result : " + str(dice) + "\n--> To f212\n")
        f212()

def f22():
    dice = d.roll20()
    if dice <= 10:
        print("Result : " + str(dice) + "\n--> To f221\n")
        f221()
    elif dice > 10:
        print("Result : " + str(dice) + "\n--> To f222\n")
        f222()

def f211():
    dice = d.roll20()
    print("Final result : " + str(dice))

def f212():
    dice = d.roll20()
    print("Final result : " + str(dice))

def f221():
    dice = d.roll20()
    print("Final result : " + str(dice))

def f222():
    dice = d.roll20()
    print("Final result : " + str(dice))

ini()