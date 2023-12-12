/*
    Calculate a+b

    Input:
    a and b

    Output:
    a + b

    Note:
    Use + operator
*/

#include<stdio.h>

int calculate(int a, int b);
float f_calculate(float a, float b);
int calculate(int a, int b)
{
    return a + b;
}

float f_calculate(float a, float b)
{
    return a + b;
}

int main(int argc, char const *argv[])
{
    // example
    int r;
    float o;
    r = calculate(1, 2);
    o = f_calculate(2.1,3.2);
    printf("%d and %f",r,o);
    return 0;
}
