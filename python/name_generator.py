import pandas as pd
import numpy as np

with open('first_names.txt') as f:
    first_names = np.array(f.read().splitlines())

with open('last_names.txt') as f:
    last_names = np.array(f.read().splitlines())

instrument_list = np.array(['trumpet','tuba','clarinet','flute','saxophone',])

num_entries = 500
id_num = np.array(range(num_entries))
firstName = first_names[np.random.randint(low=0, high=len(first_names), size=[num_entries])]
lastName = last_names[np.random.randint(low=0, high=len(last_names), size=[num_entries])]
grade = np.random.randint(low=6,high=8+1,size=[num_entries])
classPeriod = np.random.randint(low=1,high=8+1,size=[num_entries])
instrument = instrument_list[np.random.randint(low=0, high=len(instrument_list), size=[num_entries])]
instrumentSN =  np.random.randint(low=150,high=200,size=[num_entries])
mouthpieceSN = np.random.randint(low=200,high=300,size=[num_entries])
locker = np.random.randint(low=100,high=300,size=[num_entries])

df = pd.DataFrame({
    'id':id_num,
    'firstName':firstName,
    'lastName':lastName,
    'grade':grade,
    'classPeriod':classPeriod,
    'instrument':instrument,
    'instrumentSN':instrumentSN,
    'mouthpieceSN':mouthpieceSN,
    'locker':locker
    })
df['firstName'] = df['firstName'].str.lower().str.capitalize() 
df['lastName'] = df['lastName'].str.lower().str.capitalize()
with open('../src/data_test.js', 'w') as f:
    f.write('const studentData = \n')
    f.write(df.to_json(orient='records'))
    f.write('\n export default studentData')
