import matplotlib.pyplot as plt 
lst_x= [x for x in range(-10,11)]
lst_y =[f(y) for y in lst_x]




def f(x):
        return x*x-1

plt.title('график функции y=x^2-1')
plt.xlabel('X')
plt.ylabel('Y')
plt.grid()
plt.plot(lst_X,lst_y)
pyplot.show()


