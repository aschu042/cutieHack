#include <iostream>
#include <vector>
#include <cmath> 
#include <string>

using namespace std;

int main()
{
    
    string degRad;
    string exit;
    string end;

    cout << "Type in for degree or radians" << endl;
    cin >> degRad;

    while(exit != "Exit")
    {
        double result = 0;
        int count = 0;
        while(end != "End")
        {
            double input1 = result;
            double input2 = 0;
            string _operator;
            if(count == 0)
            {
                cout << "enter a number" << endl;
                cin >> input1;
            }

            cin.ignore();

            cout << "VALID OPERATORS: + - * / ^ ln log sin cos tan sec csc cot" << endl;
            cout << "enter an operator" << endl;
            getline(cin, _operator);

            if(_operator == "+" || _operator == "-" || _operator == "/" || _operator == "*" || _operator == "^")
            {
                if(_operator == "+")
                {
                    cout << "enter second number" << endl;
                    cin >> input2;
                    result = input1 + input2;
                    cout << result << endl;
                }
                else if(_operator == "-")
                {
                    cout << "enter second number" << endl;
                    cin >> input2;
                    result = input1 - input2;
                    cout << result << endl;
                }
                else if(_operator == "*")
                {
                    cout << "enter second number" << endl;
                    cin >> input2;
                    result = input1 * input2;
                    cout << result << endl << endl;
                }
                else if(_operator == "/")
                {
                    cout << "enter second number" << endl;
                    cin >> input2;
                    result = input1 / input2;
                    cout << result << endl;
                }
                else if(_operator == "^")
                {
                    cout << "enter second number" << endl;
                    cin >> input2;
                    result = pow(input1, input2);
                    cout << result << endl;
                }
                count++;
            }
            else if(_operator == "ln" || _operator == "log" || _operator == "sin" || _operator == "cos" || _operator == "tan" || _operator == "sec" || _operator == "csc" || _operator == "cot" )
            {
                if(_operator == "ln")
                {
                    result = log(input1);
                    cout << result << endl;
                }
                else if(_operator == "log")
                {
                    result = log10(input1);
                    cout << result << endl;
                }
                else if(_operator == "sin")
                {
                    result = sin(input1);
                    cout << result << endl;
                }
                else if(_operator == "cos")
                {
                    result = cos(input1);
                    cout << result << endl;   
                }
                else if(_operator == "tan")
                {
                    result = tan(input1);  
                    cout << result << endl;
                }
                else if(_operator == "sec")
                {
                    result = 1 / cos(input1);  
                    cout << result << endl;
                }
                else if(_operator == "csc")
                {
                    result = 1 / sin(input1);  
                    cout << result << endl;
                }
                else
                {
                    result = 1 / tan(input1);
                    cout << result << endl;
                }
            }
            else
            {
                cout << "INVALID-OPERATOR" << endl;
            }


            // cout << "enter an expression in the format 'eg. 2 + 2' and press enter when done" << endl;
            // cin >> input1;
            // cin >> _operator;
            // cin >> input2;
            // cout << input1 << ' ' << input2 << ' ' << _operator << endl;

            cout << "to exit type /'Continue''End' to continue this expression or end it" << endl;
            cin >> end;
        }

        cout << "do you want to stop using the calculator(Type in 'Exit' if you wish to do so or type in 'Continue')" << endl;
        cin >> exit;

        
    }
}
