import { Component } from 'react';

import { ContactForm, ContactList, Filter, Section } from '../components';
import { AppStyled } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  createNewContact = data => {
    const stateName = this.state.contacts.map(e => e.name);
    const newName = data.map(e => e.name);

    !stateName.includes(newName[0])
      ? this.setState({ contacts: this.state.contacts.concat(data) })
      : alert(`${newName} is already in contacts.`);
  };

  deleteContact = contactId => {
    this.setState(prevStates => ({
      contacts: prevStates.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  onFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  findContact = () => {
    const normalizeFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const findContact = this.findContact();
    return (
      <AppStyled>
        <Section title="Phonebook">
          <ContactForm createNewContact={this.createNewContact} />
        </Section>

        <Section title="Contacts">
          <Filter filterValue={filter} onChange={this.onFilterChange} />
          <ContactList
            contacts={findContact}
            deleteContact={this.deleteContact}
          />
        </Section>
      </AppStyled>
    );
  }
}
